import React from 'react'
import classNames from 'classnames'

function RoundIcon({
  icon: Icon,
  iconColorClass = 'text-purple-600 dark:text-purple-100',
  bgColorClass = 'bg-purple-100 dark:bg-purple-600',
  borderColorClass = "border-4 border-orange-400",
  className,
}) {
  const baseStyle = 'p-2 rounded-full'

  const cls = classNames(baseStyle, iconColorClass, bgColorClass, borderColorClass, className)
  return (
    <div className={cls}>
      <Icon className="w-15 h-15" />
    </div>
  )
}

export default RoundIcon
