import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FoodBankOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z\"/>")
      .name("FoodBankOutlined")
  }
}

export default FoodBankOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
