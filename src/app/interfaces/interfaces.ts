export interface RespuestaTopHeadlines{
    status: string;
    data: FechasFeriadas[] ;
}

export interface FechasFeriadas{
    title: string;
    date: string;
    extra: string;
    inalienable: string;
    type: string;
}