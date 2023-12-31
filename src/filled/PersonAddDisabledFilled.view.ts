import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PersonAddDisabledFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"15\" cy=\"8\" r=\"4\"/><path d=\"M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9h.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9l2.5 2.5zM6 10v-.9l.9.9H6z\"/>")
      .name("PersonAddDisabledFilled")
  }
}

export default PersonAddDisabledFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
