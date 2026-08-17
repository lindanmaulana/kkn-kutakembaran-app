'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TooltipProvider } from '@/components/ui/tooltip';

interface AppProps {
	children: ReactNode;
}

const App = ({ children }: AppProps) => {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={client}>
			{process.env.NODE_ENV === 'production' && <ReactQueryDevtools initialIsOpen={false} position="bottom" />}

			<TooltipProvider>{children}</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;
