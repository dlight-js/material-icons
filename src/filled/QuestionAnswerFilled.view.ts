import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class QuestionAnswerFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"/>")
      .name("QuestionAnswerFilled")
  }
}

export default QuestionAnswerFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
