import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-helvetica tracking-widest uppercase',
    {
        variants: {
            intent: {
                upcoming:  'text-ara-white',
                soldout:   'text-sosyal-red',
                lowTix:    'text-afters-yellow'
            }
        },
        defaultVariants: {
            intent: 'upcoming'
        }
    }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
    label: string
    className?: string
}

export default function Badge({ intent, label, className }: BadgeProps) {
    return (
        <span className={cn(badgeVariants({ intent }), className)}>
            {label}
        </span>
    )
}