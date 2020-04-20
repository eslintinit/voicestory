import { useEffect } from 'react'

/**
 * Adopted from
 * https://github.com/tim-soft/use-double-click/blob/master/src/index.js
 *
 * A simple React hook for differentiating single and double presss on the same component.
 *
 * @param {number} [latency=300] The amount of time (in milliseconds) to wait before differentiating a single from a double press
 * @param {function} onDoublePress A callback function for double press events
 */
const useDoubleKeyPress = ({
  key,
  latency = 300,
  onDoublePress = () => null,
}) => {
  useEffect(() => {
    let pressCount = 0
    const handlePress = (e) => {
      if (e.key === key) {
        pressCount += 1

        setTimeout(() => {
          if (pressCount === 2) onDoublePress(e)

          pressCount = 0
        }, latency)
      }
    }

    // Add event listener for press events
    document.addEventListener('keydown', handlePress)

    // Remove event listener
    return () => {
      document.removeEventListener('keydown', handlePress)
    }
  })
}

export default useDoubleKeyPress
