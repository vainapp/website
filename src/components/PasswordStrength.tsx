import { useFormContext } from 'react-hook-form'
import zxcvbn from 'zxcvbn'

export const PasswordStrength: React.FC = () => {
  const form = useFormContext<any>()
  const password = form.watch('password')
  const score = password !== undefined ? zxcvbn(password).score : 0

  let feedbackColorClassName: string

  if (score === 0) {
    feedbackColorClassName = 'bg-red-500'
  } else if (score === 1) {
    feedbackColorClassName = 'bg-orange-500'
  } else if (score === 2) {
    feedbackColorClassName = 'bg-amber-500'
  } else if (score === 3) {
    feedbackColorClassName = 'bg-yellow-500'
  } else {
    feedbackColorClassName = 'bg-green-500'
  }

  const bars = Array.from({ length: Number(score) + 1 })

  return (
    <div className="flex mt-2">
      {bars.map((_, index) => (
        <div
          key={index}
          className={`rounded ${feedbackColorClassName} py-1 px-5 mr-2`}
        ></div>
      ))}
    </div>
  )
}
