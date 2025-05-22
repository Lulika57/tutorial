import cn from 'clsx';


type props = {
    instructions: string[],
    substitutes: { toSubstitute: string, substitution: string }[],
}


export function Recipe({ instructions, substitutes }: props) {

    return (
        <div className='lg:w-[70%] xl:w-[70%] pt-12 xl:pt-0 lg:pt-0 px-4 flex flex-col justify-start gap-5  '>

            {instructions.map((instructions, idx) => {
                const isLast = idx == instructions.length - 1;

                return (
                    <p className={cn('bg-green-50 text-justify font-yellowtail text-[20px]', !isLast && 'py-2')}>{instructions}</p>
                )
            })}

            <div className='py-2'>
                <p className='text-3xl underline py-1 font-yellowtail'>Substitutes:</p>
                {substitutes.map((substitute) => {
                    return (
                        <p><span className='font-bold'>
                            {substitute.toSubstitute}</span>
                            <span className='font-yellowtail text-2xl'>{substitute.substitution}</span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}