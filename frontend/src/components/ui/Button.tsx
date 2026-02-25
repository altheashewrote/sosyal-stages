import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
    // set base styles
    'px-6 py-3 font-horizon rounded-sm transition-all duration-200 cursor-pointer',
    {
        // define intent and size variants, as well as set default
        variants: {
            intent: {
                primary:   'bg-sosyal-red text-ara-white hover:bg-bass-blue hover:border hover:border-ara-white',
                secondary: 'bg-transparent text-ara-white border border-ara-white hover:bg-ara-white hover:text-rave-black',
                danger:    'bg-red-600 text-white hover:bg-red-700',
            },
            size: {
                sm:   'text-sm px-4 py-2',
                md:   'text-base px-6 py-3',
                lg:   'text-lg px-8 py-4',
            }
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md'
        }
    }
)

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export default function Button({ intent, size, className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ intent, size }), className)}
            {...props}
        />
    )
}