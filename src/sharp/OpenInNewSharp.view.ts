import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class OpenInNewSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>")
      .name("OpenInNewSharp")
  }
}

export default OpenInNewSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
