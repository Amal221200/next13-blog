"use client";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)


  return (
    <div className={styles.container} onClick={toggleTheme} style={theme === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: '#0f172a' }}>
      <Image src="/moon.png" height={14} width={14} style={{ marginLeft: 1 }} alt="moon" />
      <div className={styles.ball} style={theme === 'dark' ? { backgroundColor: '#0f172a', left: 1, } : { backgroundColor: 'white', right: 1 }} />
      <Image src="/sun.png" height={14} width={14} style={{ marginRight: 1 }} alt="sun" />
    </div>
  )
}
export default ThemeToggle