import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NoDrinksOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21.19 21.19 2.81 2.81 1.39 4.22l8.23 8.23L11 14v5H6v2h12v-.17l1.78 1.78 1.41-1.42zM13 19v-3.17L16.17 19H13zM7.83 5l-2-2H21v2l-6.2 6.97-1.42-1.42L14.77 9h-2.94l-2-2h6.74l1.78-2H7.83z\"/>")
      .name("NoDrinksOutlined")
  }
}

export default NoDrinksOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
