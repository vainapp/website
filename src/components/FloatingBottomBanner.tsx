import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from './Link'

export const FloatingBottomBanner: React.FC = () => {
  const [open, setOpen] = useState(true)

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-orange-500 p-2 shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-orange-600 p-2">
                <MegaphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">
                  Em breve iremos liberar uma versão de testes!
                </span>
                <span className="hidden md:inline">
                  Grande notícia! Em breve iremos liberar uma versão de testes!
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <Link
                href="/"
                anchor="highlighted-features"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm hover:bg-orange-50"
              >
                Conhecer a plataforma
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => {
                  setOpen(false)
                }}
              >
                <span className="sr-only">Fecahr</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
