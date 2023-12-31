import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeblurSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 3v18a9 9 0 0 0 0-18z\"/><circle cx=\"6\" cy=\"14\" r=\"1\"/><circle cx=\"6\" cy=\"18\" r=\"1\"/><circle cx=\"6\" cy=\"10\" r=\"1\"/><circle cx=\"3\" cy=\"10\" r=\".5\"/><circle cx=\"6\" cy=\"6\" r=\"1\"/><circle cx=\"3\" cy=\"14\" r=\".5\"/><circle cx=\"10\" cy=\"21\" r=\".5\"/><circle cx=\"10\" cy=\"3\" r=\".5\"/><circle cx=\"10\" cy=\"6\" r=\"1\"/><circle cx=\"10\" cy=\"14\" r=\"1.5\"/><circle cx=\"10\" cy=\"10\" r=\"1.5\"/><circle cx=\"10\" cy=\"18\" r=\"1\"/>")
      .name("DeblurSharp")
  }
}

export default DeblurSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
