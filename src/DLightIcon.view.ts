import { View } from "@dlightjs/dlight"
import { ForwardProps, Prop, required } from "@dlightjs/types"
import { span, type Typed, type Pretty } from "@dlightjs/types"
interface DLightIconProps {
  content: string
  name: string
  width?: number
  height?: number
  color?: string
  opacity?: string
  fontSize?: string
  class?: string
}

@View
@ForwardProps
class DLightIcon implements DLightIconProps {
  @Prop content: string = required
  @Prop name: string = required
  /**
   * @default 24
   */
  @Prop width = 24
  /**
   * @default 24
   */
  @Prop height = 24
  @Prop color = undefined
  @Prop opacity = undefined
  /**
   * font-size
   */
  @Prop fontSize = undefined

  @Prop class = undefined

  View() {
    span()
      .class(`MUI-Icon-${this.name} ${this.class}`.trim())
      .innerHTML(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${
          this.width
        }" height="${this.height}" viewBox="0 0 24 24"${
          this.color ? ` fill="${this.color}"` : ""
        }${this.opacity ? ` opacity="${this.opacity}"` : ""}${
          this.fontSize ? ` font-size="${this.fontSize}"` : ""
        }>${this.content}</svg>`
      )
      .forwardProps()
  }
}

export type DLightIconType = Omit<DLightIconProps, "content" | "name">

export default DLightIcon as Pretty as Typed<DLightIconProps>
