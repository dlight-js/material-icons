import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Co2Round {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3zm7 2h-2v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H18c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1h-2.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zM8 14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.25c0 .41-.34.75-.75.75a.76.76 0 0 1-.71-.5H4.5v3h2.04c.1-.29.38-.5.71-.5.41 0 .75.34.75.75V14z\"/>")
      .name("Co2Round")
  }
}

export default Co2Round as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
