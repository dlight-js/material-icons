import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DirectionsOffOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m21.71 11.29-9-9a.996.996 0 0 0-1.41 0L8.21 5.38l1.41 1.41L12 4.42 19.58 12l-2.38 2.38 1.41 1.41 3.09-3.09c.4-.37.4-1 .01-1.41z\"/><path d=\"M13 7.5v2.67l2.17 2.17L16.5 11zM1.39 4.22l3.99 3.99-3.09 3.09a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09 3.99 3.99 1.41-1.41L2.81 2.81 1.39 4.22zm6.64 6.63c-.01.05-.04.1-.04.15v4h2v-2.18l4.38 4.38L12 19.58 4.42 12 6.8 9.62l1.23 1.23z\"/>")
      .name("DirectionsOffOutlined")
  }
}

export default DirectionsOffOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>