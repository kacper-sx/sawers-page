import { Typography } from "@/components/ui/typography/typography";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ServiceImage = ({ source }: { source: string }) => {
	return (
		<div className="flex w-full h-full lg:h-full rounded-2xl">
			<Image
        src={source}
				alt="service-photo"
        width={0}
        height={0}
        sizes="100vw"
				className="flex lg:saturate-50 lg:group-hover:filter-none transition-all duration-500 object-cover rounded-2xl h-full lg:max-w-[780px] w-full"
			/>
			
		</div>
	);
};

export type ServicesProps = {
	source: string;
	name: string;
};
export const ServiceHomeCard = ({ source, name }: ServicesProps) => {
	return (
		<div
			className={cn(
				"flex relative rounded-2xl place-self-stretch group duration-500 transition-all min-h-[320px] md:min-h-max",
				"hover:ring-4 active:ring-primary ring-offset-4 ring-sawers-sun ring-offset-background",
			)}
		>
			<ServiceImage source={source} />
			<div className="absolute w-full bottom-0 bg-secondary/50 backdrop-blur-md rounded-2xl">
				<Typography
					variant={"h4"}
					as={"h3"}
					className="text-sawers-sun font-medium p-4 w-full text-center tracking-tight"
				>
					{name}
					<div
						className={cn(
							"flex gap-2 duration-300 transition-all items-center mt-5 lg:mt-0",
							"justify-center w-full h-0 group-hover:h-5 group-hover:mt-5",
						)}
					>
						<span className="text-foreground lg:hidden animate-in group-hover:fade-in-25 duration-300 transition-all group-hover:block font-bold font-serif tracking-wide text-sm">
							Przejdź dalej
						</span>
						<ChevronsRight className="size-8 lg:hidden animate-in group-hover:fade-in-25  duration-300 transition-all group-hover:block text-sawers-sun block" />
					</div>
				</Typography>
			</div>
			<Link
				href={"/services"}
				aria-label="service-link"
				className="absolute inset-0"
			/>
		</div>
	);
};
