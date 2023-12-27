import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class UploadTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9.83 8H11v6h2V8h1.17L12 5.83z\" opacity=\".3\"/><path d=\"m12 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z\"/>")
      .name("UploadTwoTone")
  }
}

export default UploadTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
