export function PerispekLogo({ size = 32 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[0.63%_5.74%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src="/logo-main.svg" />
      </div>
      <div className="absolute inset-[8.77%_4.49%_82.75%_79.84%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src="/logo-dot.svg" />
      </div>
    </div>
  )
}
