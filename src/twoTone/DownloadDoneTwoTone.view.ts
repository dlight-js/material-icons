import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class DownloadDoneTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z\"/>")
      .name("DownloadDoneTwoTone")
  }
}

export default DownloadDoneTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>