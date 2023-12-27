import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FileCopySharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 1H2v16h2V3h12V1zm-1 4 6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z\"/>")
      .name("FileCopySharp")
  }
}

export default FileCopySharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
