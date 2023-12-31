import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DetailsTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13 8.92 18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z\" opacity=\".3\"/><path d=\"M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z\"/>")
      .name("DetailsTwoTone")
  }
}

export default DetailsTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
