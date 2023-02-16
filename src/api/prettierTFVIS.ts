/*
 * @Author: 尹成诺
 * @Date: 2023-02-16 11:13:52
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-16 11:34:44
 * @Description: file content
 */
import { onBeforeUnmount } from "vue";
import * as tfvis from "@tensorflow/tfjs-vis";

export default (name: string) => {
  tfvis.visor().open();
  (document.getElementsByClassName("visor-tabs")[0] as HTMLElement).style.marginTop = "0px";
  (document.getElementsByClassName("visor-tabs")[0] as HTMLElement).style.paddingBottom = "0px";
  (document.getElementsByClassName("visor-controls")[0] as HTMLElement).style.display = "none";
  setTimeout(() => {
    tfvis.visor().setActiveTab(name);
    (Array.from(document.getElementsByClassName("subsurface-title")) as Array<HTMLElement>).forEach((e) => (e.style.marginBottom = "0px"));
  }, 1111);

  onBeforeUnmount(() => {
    tfvis.visor().close();
  });
};
