// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredProgramsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Youth Programs
export const GET_PROGRAMS = gql`
  query GetPrograms($first: Int = 20) {
    nodePrograms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            processed
            summary
          }
          programArea {
            ... on TermInterface {
              id
              name
            }
          }
          ageGroup {
            ... on TermInterface {
              id
              name
            }
          }
          schedule
          location
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROGRAM_BY_PATH = gql`
  query GetProgramByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programArea {
              ... on TermInterface {
                id
                name
              }
            }
            ageGroup {
              ... on TermInterface {
                id
                name
              }
            }
            schedule
            location
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Mentors
export const GET_MENTORS = gql`
  query GetMentors($first: Int = 50) {
    nodeMentors(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeMentor {
          body {
            processed
          }
          specialty
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          yearsExperience
        }
      }
    }
  }
`

export const GET_MENTOR_BY_PATH = gql`
  query GetMentorByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMentor {
            id
            title
            path
            body {
              processed
            }
            specialty
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            yearsExperience
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          registrationUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Success Stories
export const GET_SUCCESS_STORIES = gql`
  query GetSuccessStories($first: Int = 20) {
    nodeSuccessStories(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeSuccessStory {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          featured
          participantName
          programArea {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_SUCCESS_STORY_BY_PATH = gql`
  query GetSuccessStoryByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeSuccessStory {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            featured
            participantName
            programArea {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            body {
              processed
            }
          }
          ... on NodeProgram {
            __typename
            id
            title
            path
            body {
              processed
            }
            programArea {
              ... on TermInterface {
                id
                name
              }
            }
            ageGroup {
              ... on TermInterface {
                id
                name
              }
            }
            schedule
            location
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeMentor {
            __typename
            id
            title
            path
            body {
              processed
            }
            specialty
            email
            phone
            photo {
              url
              alt
              width
              height
            }
            yearsExperience
          }
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            registrationUrl
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeSuccessStory {
            __typename
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
            }
            featured
            participantName
            programArea {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredProgramsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured programs for homepage
export const GET_FEATURED_PROGRAMS = gql`
  query GetFeaturedPrograms {
    nodePrograms(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          programArea {
            ... on TermInterface {
              id
              name
            }
          }
          ageGroup {
            ... on TermInterface {
              id
              name
            }
          }
          schedule
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured success stories for homepage
export const GET_FEATURED_STORIES = gql`
  query GetFeaturedStories {
    nodeSuccessStories(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeSuccessStory {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          featured
          participantName
          programArea {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
