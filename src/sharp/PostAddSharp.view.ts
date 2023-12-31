import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PostAddSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17 19.22H5V7h7V5H3v16h16v-9h-2z\"/><path d=\"M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z\"/>")
      .name("PostAddSharp")
  }
}

export default PostAddSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
