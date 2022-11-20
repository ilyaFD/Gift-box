import { UITitle, UIButton } from "../../components/"
export function Start() {
  return (
    <div className="px-4 flex justify-center items-center flex-col min-h-screen text-center">
      <UITitle text="LEGO minifigs mystery box" size="lg" />
      <UIButton label="let's go!" url="/gift-set"/>
    </div>
  )
}