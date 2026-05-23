import { createServerFn } from '@tanstack/react-start';

export type MediaType = 'image' | 'video' | 'youtube' | 'vimeo' | 'unknown';

export interface ResolvedMedia {
  type: MediaType;
  src: string;
}

export const resolveMediaUrl = createServerFn({ method: "GET" })
  .inputValidator((url: string) => url)
  .handler(async (ctx: any): Promise<ResolvedMedia> => {
    const url = ctx.data;
    if (!url) return { type: 'unknown', src: '' };

    if (!url.startsWith('http')) {
      const ext = url.split('.').pop()?.toLowerCase() || '';
      if (['mp4', 'webm', 'ogg'].includes(ext)) return { type: 'video', src: url };
      return { type: 'image', src: url };
    }

    try {
      const urlObj = new URL(url);
      
      if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
        let videoId = '';
        if (urlObj.hostname.includes('youtu.be')) {
          videoId = urlObj.pathname.slice(1);
        } else {
          videoId = urlObj.searchParams.get('v') || '';
        }
        if (videoId) {
          return { type: 'youtube', src: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0` };
        }
      }

      if (urlObj.hostname.includes('vimeo.com')) {
        const videoId = urlObj.pathname.split('/').pop();
        if (videoId) {
          return { type: 'vimeo', src: `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0` };
        }
      }

      const ext = urlObj.pathname.split('.').pop()?.toLowerCase() || '';
      if (['mp4', 'webm', 'ogg'].includes(ext)) return { type: 'video', src: url };
      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return { type: 'image', src: url };

      const response = await fetch(url, { headers: { 'User-Agent': 'bot' } });
      if (response.ok) {
        const html = await response.text();
        const ogMatch = html.match(/<meta\s+(?:property|name)=["'](?:og:image|twitter:image)["']\s+content=["']([^"']+)["']/i) || 
                        html.match(/<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["'](?:og:image|twitter:image)["']/i);
        if (ogMatch && ogMatch[1]) {
          return { type: 'image', src: ogMatch[1] };
        }
      }
    } catch (e) {
      console.error('Failed to resolve media URL:', e);
    }

    return { type: 'image', src: url };
  });
