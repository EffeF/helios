import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Episode, PluginLoaderService, Show } from '@wako-app/mobile-sdk';
import { SourceQuery } from '../../../projects/plugin/src/plugin/entities/source-query';
import { SourceUtils } from '../../../projects/plugin/src/plugin/services/source-utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss']
})
export class EpisodePage implements OnInit {
  @ViewChild('episodeRef', { read: ViewContainerRef, static: true })
  episodeVCRef: ViewContainerRef;

  @ViewChild('episodeItemOptionRef', { read: ViewContainerRef, static: true })
  episodeItemOptionVCRef: ViewContainerRef;



  constructor(private pluginLoader: PluginLoaderService) {
  }

  ngOnInit() {
    this.loadPlugin();

    this.test();
  }

  loadPlugin() {

    // this.pluginLoader.createComponent('episodes', this.episodeVCRef, this.data);
    // this.pluginLoader.createComponent('episodes-item-option', this.episodeItemOptionVCRef, this.data);
  }

  private test() {

  }
}
