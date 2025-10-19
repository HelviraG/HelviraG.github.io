export const BuyCoffeeLink = ({ noAbsolute }: { noAbsolute?: boolean }) => {
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
                })
            }}
        >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
              style={{ height: "48px", width: "200px" }}
            />
        </a>
    )
}