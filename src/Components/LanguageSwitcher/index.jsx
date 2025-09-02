import React from "react"
import { useTranslation } from "react-i18next"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const handleChange = (e) => {
    const lang = e.target.value

    localStorage.setItem("i18nextLng", lang) 
  }

  return (
    <select onChange={handleChange} value={i18n.language}>
      <option value="en">🇬🇧 English</option>
      <option value="pt">🇵🇹 Portuguese</option>
      <option value="es">🇪🇸 Spanish</option>
    </select>
  )
}

export default LanguageSwitcher
