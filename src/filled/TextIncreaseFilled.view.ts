import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TextIncreaseFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z\"/>")
      .name("TextIncreaseFilled")
  }
}

export default TextIncreaseFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
