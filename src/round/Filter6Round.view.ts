import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Filter6Round {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-7-2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2zm0-4h2v2h-2v-2z\"/>")
      .name("Filter6Round")
  }
}

export default Filter6Round as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
