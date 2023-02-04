export class Video {
  link: string;
  id: string;

  constructor(link: string) {
    this.link = link;

    const params = new URL(link).searchParams;

    this.id = params.get('v')
    console.log('id', this.id );
  }


}
