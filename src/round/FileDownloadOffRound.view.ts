import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FileDownloadOffRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M9 6.17V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v5h1.59c.89 0 1.33 1.08.7 1.71l-1.88 1.88L9 6.17zm11.49 14.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.5 4.5c-.26.37-.28.91.1 1.28l4.59 4.59c.35.35.88.37 1.27.09L15.17 18H6c-.55 0-1 .45-1 1s.45 1 1 1h11.17l1.9 1.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z\"/>")
      .name("FileDownloadOffRound")
  }
}

export default FileDownloadOffRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
