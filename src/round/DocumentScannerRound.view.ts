import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DocumentScannerRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M3 6c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1H4v2c0 .55-.45 1-1 1zm14-4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1zM3 18c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H4v-2c0-.55-.45-1-1-1zm14 4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1zm2-4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12zM9 9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zm0 3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zm0 3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1z\"/>")
      .name("DocumentScannerRound")
  }
}

export default DocumentScannerRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
