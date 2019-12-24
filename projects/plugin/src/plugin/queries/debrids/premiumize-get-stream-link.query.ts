import { SourceQuery } from '../../entities/source-query';
import { getSupportedMedia } from '../../services/tools';
import { map } from 'rxjs/operators';
import { StreamLinkSource } from '../../entities/stream-link-source';
import { Link } from '../../entities/link';
import { StreamLinksFromLinksQuery } from './stream-links-from-links.query';

export class PremiumizeGetStreamLinkQuery {
  static getData(streamLinkSource: StreamLinkSource, sourceQuery: SourceQuery) {
    return streamLinkSource.premiumizeTransferDirectdlDto.pipe(
      map(dto => {
        if (dto.status !== 'success') {
          throw new Error(dto.message);
        }

        const links: Link[] = [];

        dto.content.forEach(_file => {
          const ext = '.' + _file.link.split('.').pop().toLowerCase();
          const commonVideoExtensions = getSupportedMedia('video').split('|');

          if (commonVideoExtensions.includes(ext)) {
            links.push({
              filename: _file.path.split('/').pop(),
              size: _file.size,
              streamLink: _file.stream_link,
              url: _file.link,
              servicePlayerUrl: null
            });
          }
        });

        return StreamLinksFromLinksQuery.getData(streamLinkSource, sourceQuery, links);
      })
    );
  }
}
