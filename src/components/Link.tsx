import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { useScrollToAnchor } from '../contexts/ScrollToAnchorContext'

type ForwardNextLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps & {
    children: React.ReactNode
  } & React.RefAttributes<HTMLAnchorElement>

interface LinkProps extends ForwardNextLinkProps {
  anchor?: string
}

export const Link: React.FC<LinkProps> = ({
  anchor,
  children,
  onClick,
  ...rest
}: LinkProps) => {
  const { setElementName } = useScrollToAnchor()

  const customOnClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (onClick != null) {
      onClick(event)
    }

    if (anchor != null) {
      setElementName(anchor)
    }
  }

  return (
    <NextLink {...rest} onClick={customOnClick}>
      {children}
    </NextLink>
  )
}
