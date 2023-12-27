import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CreateNewFolderSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 6H12l-2-2H2v16h20V6zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z\"/>")
      .name("CreateNewFolderSharp")
  }
}

export default CreateNewFolderSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
