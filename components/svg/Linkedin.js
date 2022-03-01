export default function LinkedIn(props){
    const {color, hoverColor} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 48 48"
            className={`${color} ease-out duration-200 hover:scale-125 hover:rounded-md hover:shadow-lg ${hoverColor} hover:border-solid hover:border-red-500 hover:border-2`}
        >
            <path  d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z">
            </path>
        </svg>
    )
}