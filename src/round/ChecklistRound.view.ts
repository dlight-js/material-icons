import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ChecklistRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1zm-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1zM10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.4 0zm.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16a.996.996 0 1 1 1.41-1.41l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.41.01z\"/>")
      .name("ChecklistRound")
  }
}

export default ChecklistRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
