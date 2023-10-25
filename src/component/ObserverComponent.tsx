import React, { useEffect, useRef } from "react"

export const ObserverComponent = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Element is now visible in the viewport!")
          observer.unobserve(entry.target) // 要素が表示されたら監視を解除
        }
      },
      {
        root: null, // null はビューポートを意味する
        rootMargin: "0px",
        threshold: 0.1, // 10% の交差でcallbackをトリガー
      }
    )

    if (ref.current) {
      observer.observe(ref.current) // 対象要素を監視開始
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current) // コンポーネントのアンマウント時に監視を解除
      }
    }
  }, [ref]) // ref が変わるたびに effect を再実行

  return (
    <div ref={ref} style={{ height: "100vh", width: "100%" }}>
      Example Element
    </div>
  )
}
