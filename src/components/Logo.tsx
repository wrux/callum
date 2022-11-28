import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const style = {
  height: '1em',
  width: '1.1559988309em',
};

const Logo: FC<LogoProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490.451 424.266"
    className={className}
    style={style}
  >
    <title>Callum Bonnyman</title>
    <desc>Logo for https://callum.co.uk</desc>
    <path
      fill="currentColor"
      d="M489.452 171.535c-3.698-18.094-13.349-27.738-20.792-32.643-8.146-5.367-18.172-8.009-27.803-7.492-12.125-25.898-29.276-49.592-50.866-69.788C347.52 21.881 292.574 0 235.276 0 177.51 0 128.159 20.051 92.559 57.987c-31.192 33.238-51.306 79.675-58.695 135.101C14.695 194.556 0 213.965 0 238.493c0 25.518 15.901 45.506 36.201 45.506 1.654 0 3.302-.149 4.933-.426 8.427 24.284 22.164 47.135 40.796 67.31 42.436 45.95 105.874 73.383 169.696 73.383 59.452 0 116.481-24.377 156.465-66.879 34.821-37.015 53.61-83.994 53.643-133.406 7.204-3.121 13.971-8.285 19-14.682 8.411-10.704 11.507-24.115 8.718-37.764zM107.143 71.673C138.866 37.868 183.175 20 235.276 20c52.206 0 102.299 19.965 141.052 56.217 20.674 19.339 36.892 42.177 48.016 67.158l-34.203 25.15c-8.985-22.984-29.035-39.032-52.289-39.032-21.968 0-41.079 14.323-50.702 35.285-9.145-3.956-18.451-3.009-26.018-.372-10.451-27.205-34.129-46.247-61.614-46.247-29.692 0-54.939 22.223-63.867 52.955l-69.272-29.896c9.513-27.357 23.217-50.847 40.764-69.545zm268.042 123.905c0 25.411-16.747 46.084-37.333 46.084s-37.333-20.674-37.333-46.084c0-25.411 16.747-46.084 37.333-46.084s37.333 20.673 37.333 46.084zm-128.332 0c0 31.661-21.234 57.417-47.334 57.417-26.099 0-47.332-25.757-47.332-57.417s21.233-57.417 47.332-57.417c26.098-.001 47.334 25.756 47.334 57.417zM20 238.493c0-11.165 5.113-21.198 11.726-24.421-1.116 16.878.197 33.623 3.83 49.898C27.197 263.396 20 251.74 20 238.493zm373.524 105.191c-36.222 38.5-87.94 60.582-141.898 60.582-58.341 0-116.286-25.029-155.004-66.951-32.462-35.15-48.373-79.197-44.802-124.028 1.486-18.668 4.417-36.323 8.718-52.803l71.745 30.963c-.062 1.369-.098 2.746-.098 4.133 0 42.688 30.205 77.417 67.332 77.417 37.128 0 67.333-34.729 67.333-77.417 0-3.978-.264-7.885-.77-11.703 3.947-1.745 9.762-3.038 15.279.482-.543 3.65-.844 7.395-.844 11.221 0 36.438 25.721 66.084 57.333 66.084 31.613 0 57.333-29.646 57.333-66.084 0-1.944-.088-3.864-.23-5.766l36.834-27.085c5.305 16.202 8.574 33.101 9.631 50.375 2.951 48.239-14.059 94.614-47.892 130.58zm66.972-142.202c-1.839-16.96-5.626-33.526-11.213-49.443 2.785.643 5.66 1.766 8.373 3.554 6.229 4.104 10.334 10.816 12.2 19.948 2.422 11.849-2.893 20.658-9.36 25.941z"
    />
    <circle fill="currentColor" cx="222.788" cy="208.066" r="12.489" />
    <circle fill="currentColor" cx="347.676" cy="216.393" r="12.489" />
    <path
      fill="currentColor"
      d="M348.6 295.145c-.798-5.43-5.814-9.192-11.237-8.455-.036.004-.074.01-.109.016-5.464.803-9.243 5.884-8.438 11.348.493 3.36 1.143 6.561 1.93 9.623-49.604 21.907-102.474 9.221-116.041 5.326.74-3.271 1.209-6.568 1.4-9.904.2-3.479-1.402-6.64-3.994-8.584-1.52-1.137-3.379-1.854-5.417-1.972-5.514-.315-10.239 3.897-10.554 9.411-.519 9.016-3.943 17.564-10.785 26.906-3.241 4.428-2.308 10.631 2.071 13.912.029.021.06.045.089.063 4.456 3.263 10.713 2.297 13.976-2.16 2.196-2.999 4.135-5.989 5.832-8.983 7.53 2.33 30.672 8.65 60.101 8.65 21.491 0 46.336-3.398 70.885-14.162 1.898 3.172 4.047 6.139 6.474 8.898 2.298 2.615 5.657 3.745 8.868 3.311 1.881-.257 3.711-1.051 5.242-2.396 4.15-3.645 4.56-9.963.914-14.112-5.963-6.785-9.524-15.281-11.207-26.736z"
    />
  </svg>
);

export default Logo;
