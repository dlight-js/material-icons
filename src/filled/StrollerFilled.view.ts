import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class StrollerFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"16\" cy=\"20\" r=\"2\"/><circle cx=\"6\" cy=\"20\" r=\"2\"/><path d=\"M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2zm-7.7-2.9a8.962 8.962 0 0 0-9.58.62l4.89 4.89L14.3 4.1z\"/>")
      .name("StrollerFilled")
  }
}

export default StrollerFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
