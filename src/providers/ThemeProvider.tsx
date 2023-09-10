"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider: React.FC<BaseFCProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (mounted) {
    return (
      <div className={theme}>{children}</div>
    )
  }
}
export default ThemeProvider