import * as React from 'react'

function SvgBadge(props) {
  return (
    <svg
      width={48}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0h48v40c0 13.255-10.745 24-24 24S0 53.255 0 40V0z"
        fill="#00C88C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.54 31.866a1.43 1.43 0 001.426-1.433A1.43 1.43 0 0033.539 29a1.43 1.43 0 00-1.426 1.433 1.43 1.43 0 001.426 1.433zM13 35.867c0-.397.137-.734.41-1.009a1.362 1.362 0 011.005-.412c.396 0 .73.137 1.004.412.274.275.41.612.41 1.01v4.08c0 1.132.214 2.194.64 3.188a8.267 8.267 0 004.359 4.38 7.9 7.9 0 003.172.64 7.9 7.9 0 003.172-.641 8.267 8.267 0 004.36-4.38 8.002 8.002 0 00.638-3.187v-4.08c0-.398.137-.735.41-1.01a1.363 1.363 0 011.005-.412c.396 0 .73.137 1.004.412.274.275.411.612.411 1.01v4.08a10.8 10.8 0 01-.867 4.311 11.17 11.17 0 01-2.35 3.508 11.111 11.111 0 01-3.492 2.362c-1.34.58-2.77.871-4.291.871-1.521 0-2.952-.29-4.29-.871a11.111 11.111 0 01-3.492-2.362 11.17 11.17 0 01-2.35-3.508 10.8 10.8 0 01-.868-4.31v-4.082zM14.426 31.866a1.43 1.43 0 001.427-1.433A1.43 1.43 0 0014.426 29 1.43 1.43 0 0013 30.433a1.43 1.43 0 001.426 1.433z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgBadge
