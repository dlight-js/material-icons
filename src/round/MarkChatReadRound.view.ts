import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class MarkChatReadRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.05 19.29a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.25zM12 17a6.995 6.995 0 0 1 10-6.32V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.17.01-.33.03-.5-.02-.17-.03-.33-.03-.5z\"/>")
      .name("MarkChatReadRound")
  }
}

export default MarkChatReadRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
