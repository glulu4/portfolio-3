'use client';
import {useState, useEffect} from 'react';
import {Check} from 'lucide-react';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';
import clsx from 'clsx';

interface PillButtonProps {
    filterOptions: string[];
    onCategoriesChange: (categories: string[]) => void;
    className?: string;
}

export function PillButton({filterOptions, onCategoriesChange, className}: PillButtonProps) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (option: string) => {
        setSelected(prev => {
            if (prev.includes(option)) {
                const updatedRemove = prev.filter(x => x !== option);
                return updatedRemove;
            }
            const updatedAdd = [...prev, option];
            return updatedAdd;
        });
    };

    // Call the callback whenever selected categories change
    useEffect(() => {
        onCategoriesChange(selected);
    }, [selected, onCategoriesChange]);

    return (
        <div className={clsx("relative mx-auto max-w-5xl self-center", className)}>
            <Carousel opts={{dragFree: true, align: 'center'}}>
                <CarouselContent className="gap-2 px-1 py-2">
                    {filterOptions.map(d => {
                        const active = selected.includes(d);
                        return (
                            <CarouselItem
                                key={d}
                                className="basis-auto grow-0 shrink-0"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(d)}
                                    aria-pressed={active}
                                    className={`whitespace-nowrap rounded-full px-3 py-1 text-sm transition-colors
                                        ${active
                                            ? 'bg-hoverColor text-white border-hoverColor'
                                            : 'bg-textSec hover:bg-textTert text-white font-medium'
                                        }`}
                                >
                                    {d}
                                    {active && <Check className="inline-block ml-1 h-3 w-3" />}
                                </button>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
}