export const BuyCoffeeLink = ({ noAbsolute, small, left }: { noAbsolute?: boolean; small?: boolean; left?: boolean }) => {
    return (
        <a 
            href="https://www.buymeacoffee.com/helvira" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
                position: 'absolute', 
                bottom: '90px', 
                right: '30px',

                ...(noAbsolute && {
                    position: 'inherit'
                }),

                ...(left && {
                    bottom: '65px', 
                    right: '10px',
                }),
            }}
        >
            <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                alt="Buy Me A Coffee"
                style={{ 
                    height: "48px", 
                    width: "200px",

                    ...(small && {
                        width: "160px"
                    })
                }}
            />
        </a>
    )
}