import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OpenInBrowserSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 4v16h6v-2H5V8h14v10h-4v2h6V4H3zm9 6-4 4h3v6h2v-6h3l-4-4z\"/>")
      .name("OpenInBrowserSharp")
  }
}

export default OpenInBrowserSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
